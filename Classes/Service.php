<?php

namespace Carbon\Webfonts;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\ResourceManagement\ResourceManager;

class Service
{
    /** @var array $fonts */
    #[Flow\InjectConfiguration('frontendConfiguration.CarbonWebfonts', 'Neos.Neos.Ui')]
    protected $fonts;

    #[Flow\Inject]
    protected ResourceManager $resourceManager;

    /**
     * Get Font name
     *
     * @param string $font
     * @return array|null
     */
    public function getFontName(?string $font = null): ?string
    {
        if (!$font) {
            return null;
        }
        // Because the font string can have a fallback font, we need to split it
        $fontName = trim(explode(',', trim($font))[0]);
        if (!$fontName) {
            return null;
        }
        return $fontName;
    }

    /**
     * Get CSS File
     *
     * @param string $font
     * @param bool $absolute
     * @return string|null
     */
    public function getCSSFile(?string $font = null, bool $absolute = false): ?string
    {
        $font = $this->getFontName($font);
        if (!$font) {
            return null;
        }
        $file = $this->fonts[$font]['cssFile'] ?? null;
        if (!$file) {
            return null;
        }

        if (!str_starts_with($file, 'resource://')) {
            return $file;
        }

        if (!$absolute) {
            return str_replace('resource://', '/_Resources/Static/Packages/', $file);
        }

        // remove the resource:// prefix
        $file = str_replace('resource://', '', $file);
        [$packageKey, $path] = explode('/', $file, 2);
        $resourcePath = sprintf('resource://%s/Public/%s', $packageKey, $path);
        return $this->resourceManager->getPublicPackageResourceUriByPath($resourcePath);
    }

    /**
     * Get CSS File Content
     *
     * @param string $font
     * @return string|null
     */
    public function getCSSFileContent(?string $font = null): ?string
    {
        $file = $this->getCSSFile($font);
        if (!$file) {
            return null;
        }
        return file_get_contents($file);
    }

    /**
     * Get Fonts Paths
     *
     * @param string $font
     * @return array
     */
    public function getFontsPaths($font): array
    {
        $file = $this->getCSSFile($font);
        if (!$file) {
            return [];
        }
        $dirname = pathinfo($file, PATHINFO_DIRNAME);
        $paths = [];
        $content = file_get_contents($file);
        $re = '/url\([\'"]?([^"\')]+)/m';
        preg_match_all($re, $content, $matches, PREG_SET_ORDER, 0);
        foreach ($matches as $match) {
            $path = $match[1];
            if (str_starts_with($path, 'data:')) {
                continue;
            }
            $paths[] = $this->resolvePath($path, $dirname);
        }
        return $paths;
    }

    /**
     * Resolve path
     *
     * @param string $path
     * @param string $dirname
     * @return string
     */
    private function resolvePath(string $path, string $dirname): string
    {
        // If the path is already an absolute URL, return it
        if (filter_var($path, FILTER_VALIDATE_URL) || str_starts_with($path, '/')) {
            return $path;
        }

        $segments = explode('/', $dirname . '/' . $path);
        $result = [];

        foreach ($segments as $segment) {
            if ($segment === '..') {
                array_pop($result);
            } elseif ($segment !== '.' && $segment !== '') {
                $result[] = $segment;
            }
        }

        return implode('/', $result);
    }
}
