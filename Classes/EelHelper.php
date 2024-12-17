<?php

namespace Carbon\Webfonts;

use Neos\Eel\ProtectedContextAwareInterface;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\ResourceManagement\ResourceManager;

class EelHelper implements ProtectedContextAwareInterface
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
    public function getFontName(?string $font = null): ?string {
        if (!$font) {
            return null;
        }
        // Because the font string can have a fallback font, we need to split it
        return trim(explode(',', $font)[0]);
    }

    /**
     * Get CSS File
     *
     * @param string $font
     * @return string|null
     */
    public function getCSSFile(?string $font = null): ?string
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
     * All methods are considered safe
     *
     * @param string $methodName The name of the method
     * @return bool
     */
    public function allowsCallOfMethod($methodName)
    {
        return true;
    }
}
