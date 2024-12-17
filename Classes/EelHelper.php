<?php

namespace Carbon\Webfonts;

use Neos\Eel\ProtectedContextAwareInterface;
use Neos\Flow\Annotations as Flow;

class EelHelper implements ProtectedContextAwareInterface
{
    /** @var array $fonts */
    #[Flow\InjectConfiguration('frontendConfiguration.CarbonWebfonts', 'Neos.Neos.Ui')]
    protected $fonts;

    /**
     * Get CSS File
     *
     * @param string $font
     * @param string $prefix
     * @return string|null
     */
    public function getCSSFile(?string $font = null, ?string $prefix = null): ?string
    {
        if (!$font) {
            return null;
        }
        // Because the font string can have a fallback font, we need to split it
        $font = trim(explode(',', $font)[0]);
        $file = $this->fonts[$font]['cssFile'] ?? null;
        if (!$file) {
            return null;
        }

        if (str_starts_with($file, 'resource://')) {
            $file = str_replace('resource://', '/_Resources/Static/Packages/', $file);
        }

        if ($prefix) {
            return $prefix . $file;
        }
        return $file;
    }

    /**
     * Get CSS File Content
     *
     * @param string $font
     * @param string $prefix
     * @return string|null
     */
    public function getCSSFileContent(?string $font = null, ?string $prefix = null): ?string
    {
        $file = $this->getCSSFile($font, $prefix);
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
