# Carbon.Webfonts

[![Latest stable version]][packagist] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription]
[![GitHub license]][license] [![GitHub issues]][issues] [![GitHub forks]][network]

This package provides different web fonts for you Neos project. Used by [Litefyr] and [Carbon.Newsletter]

## Installation

Add the package in your site package:

```bash
composer require --no-update carbon/webfonts
```

Then run `composer update` in your project root.

## Add your own fonts

If you want to add your own custom font, you can add your entry under the settings key
`Neos.Neos.Ui.frontendConfiguration.CarbonWebfonts`:

```yaml
Neos:
  Neos:
    Ui:
      frontendConfiguration:
        CarbonWebfonts:
          "My Custom Font Name":
            # If fontWeight is an array, it has multiple fonts, if it is a number it is a fixed font weight (e.g. 400)
            # if it is a string, it is a range of font weights (e.g. "100 900")
            fontWeight: [400, 700]
            # Group can be 'Sans Serif', Serif, Handwriting, Display or Monospace
            group: "Sans Serif"
            # The fallback is automatically done by the group name, but if you want to override it, you can set it here
            fallback: "Helvetica, sans-serif"
            # If your font is a webfont, please add a css-file with all declartions in it. It has to be in the public folder
            cssFile: resource://Vendor.Package/Fonts/MyCustomFontName.css
```

This setting can also be added on a per property basis:

```yaml
Vendor.Package:Mixin.FontFamily:
  properties:
    type: string
    ui:
      inspector:
        editor: "Carbon.Webfonts/FontFamily"
        editorOptions:
          allowEmpty:
            true
            # Set this to an object just like a font value to use a placeholder font
          # It takes the same values as a font value, but adding the needed name
          placeholderFont:
            name: "Open Sans"
            fallback: "Helvetica, Arial, sans-serif"
          # A path to a CSS file with @font-face declarations.
          # Can be a resource:// or a http(s):// path
          cssFile: false
          # This disables the fonts from this package
          useCarbonWebfonts: false
          # If set to false, only the font name is stored in the database
          enableFallback: true
          fonts:
            Alumni Sans:
              # Sets properties for showing in the editor preview. Does not affect saved value.
              # defaults to fontWeight: 400 and fontStyle: normal
              display:
                fontWeight: 500
                fontStyle: italic
              group: Sans Serif
              cssFile: resource://Vendor.Package/Fonts/Alumni-Sans.css
              fontWeight: 100 900
              fallback:
                ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto
                Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'
            Atkinson Hyperlegible:
              group: Sans Serif
              cssFile: resource://Vendor.Package/Fonts/Atkinson-Hyperlegible.css
              fontWeight:
                - 400
                - 700
              fallback:
                ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto
                Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'
            Impact:
              group: Sans Serif
              fontWeight:
                - 400
                - 700
              fallback:
                ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto
                Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'
```

[packagist]: https://packagist.org/packages/carbon/webfonts
[latest stable version]: https://poser.pugx.org/carbon/webfonts/v/stable
[github issues]: https://img.shields.io/github/issues/CarbonPackages/Carbon.Webfonts
[issues]: https://github.com/CarbonPackages/Carbon.Webfonts/issues
[github forks]: https://img.shields.io/github/forks/CarbonPackages/Carbon.Webfonts
[network]: https://github.com/CarbonPackages/Carbon.Webfonts/network
[github stars]: https://img.shields.io/github/stars/CarbonPackages/Carbon.Webfonts
[stargazers]: https://github.com/CarbonPackages/Carbon.Webfonts/stargazers
[github license]: https://img.shields.io/github/license/CarbonPackages/Carbon.Webfonts
[license]: LICENSE
[github watchers]: https://img.shields.io/github/watchers/CarbonPackages/Carbon.Webfonts.svg
[subscription]: https://github.com/CarbonPackages/Carbon.Webfonts/subscription
[Litefyr]: https://github.com/Litefyr
[Carbon.Newsletter]: https://github.com/CarbonPackages/Carbon.Newsletter
