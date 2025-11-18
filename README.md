# PeaceRep Style Guide

## Adding New Logos

1. Add the image file to the `/img` folder.

2. Add the following `<li>` element in `index.html`, replacing the placeholders:

```html
<!-- transparent background -->
<li class="cd-box">
    <a href="img/NAME_OF_THE_IMAGE.png" download>
        <img
            style="height: 200px; width: auto; margin: auto;"
            src="img/NAME_OF_THE_IMAGE.png"
            alt="Logo version"
        />
    </a>
    NAME_TO_BE_SHOWN_ON_THE_WEB
</li>

<!-- black background -->
<li style="background-color: black; color: white;" class="cd-box">
    <a href="img/NAME_OF_THE_IMAGE.png" download>
        <img
            style="height: 200px; width: auto; margin: auto;"
            src="img/NAME_OF_THE_IMAGE.png"
            alt="Logo version"
        />
    </a>
    NAME_TO_BE_SHOWN_ON_THE_WEB
</li>
```

## Deployment

Run the following commands to push your changes:

```bash
git add .
git commit -m "Add new logo"
git push