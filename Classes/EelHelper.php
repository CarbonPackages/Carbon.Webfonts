<?php

namespace Carbon\Webfonts;

use Carbon\Webfonts\Service;
use Neos\Eel\ProtectedContextAwareInterface;
use Neos\Flow\Annotations as Flow;

class EelHelper implements ProtectedContextAwareInterface
{
    #[Flow\Inject]
    protected Service $service;

    /**
     * Get Font name
     *
     * @param string $font
     * @return array|null
     */
    public function getFontName(?string $font = null): ?string {
        return $this->service->getFontName($font);
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
        return $this->service->getCSSFile($font, $absolute);
    }

    /**
     * Get CSS File Content
     *
     * @param string $font
     * @return string|null
     */
    public function getCSSFileContent(?string $font = null): ?string
    {
        return $this->service->getCSSFileContent($font);
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
