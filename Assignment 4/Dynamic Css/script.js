const text = document.getElementById("text-container");
    const colorBox = document.getElementById("colorbox");
    const colorBtn = document.getElementById("colorchange");
    const fontSize = document.getElementById("fontsize");
    const italicBtn = document.getElementById("italic");
    const underlineBtn = document.getElementById("underline");
    const boldBtn = document.getElementById("bold");
    const fontList = document.getElementById("list");
    const getStyleBtn = document.getElementById("getstyle");
    const cssProps = document.getElementById("css-props");

    // Change text color
    colorBtn.addEventListener("click", () => {
        text.style.color = colorBox.value;
    })

    // Change font size
    fontSize.addEventListener("input", () => {
        text.style.fontSize = fontSize.value + "px";
    })

    // Toggle italic
    italicBtn.addEventListener("click", () => {
        text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
    })

    // Toggle underline
    underlineBtn.addEventListener("click", () => {
        text.style.textDecoration = text.style.textDecoration === "underline" ? "none" : "underline";
    })

    // Toggle bold
    boldBtn.addEventListener("click", () => {
        text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
    })

    // Change font family
    fontList.addEventListener("change", () => {
        text.style.fontFamily = fontList.value;
    })

    // Get css
    getStyleBtn.addEventListener("click", () => {
        let styles = [];

        if (text.style.color)
            styles.push(`color: ${text.style.color};`);

        if (text.style.fontSize)
            styles.push(`font-size: ${text.style.fontSize};`);

        if (text.style.fontStyle)
            styles.push(`font-style: ${text.style.fontStyle};`);

        if (text.style.fontWeight)
            styles.push(`font-weight: ${text.style.fontWeight};`);

        if (text.style.textDecoration)
            styles.push(`text-decoration: ${text.style.textDecoration};`);

        if (text.style.fontFamily)
            styles.push(`font-family: ${text.style.fontFamily};`);

        cssProps.textContent = styles.join(" ");
    })