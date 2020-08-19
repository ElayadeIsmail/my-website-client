const handleTheme = (mode) => {
  if (mode === "purple") {
    document.documentElement.style.setProperty("--mainColor", "#46344E");
    document.documentElement.style.setProperty("--secondaryColor", "#382a3f");
    document.documentElement.style.setProperty("--borderColor", "#1d1520");
    document.documentElement.style.setProperty("--mainText", "#fff");
    document.documentElement.style.setProperty("--secondaryText", "#eeeeee");
    document.documentElement.style.setProperty("--themeDotBorder", "#FFF");
    document.documentElement.style.setProperty(
      "--previewBg",
      "rgb(29, 21, 32, 0.8)"
    );
    document.documentElement.style.setProperty("--previewShadow", "#2b202f");
    document.documentElement.style.setProperty("--buttonColor", "#8534a3");
  }
  if (mode === "light") {
    document.documentElement.style.setProperty("--mainColor", "#eaeaea");
    document.documentElement.style.setProperty("--secondaryColor", "#fff");
    document.documentElement.style.setProperty("--borderColor", "#c1c1c1");
    document.documentElement.style.setProperty("--mainText", "black");
    document.documentElement.style.setProperty("--secondaryText", "#4b5156");
    document.documentElement.style.setProperty("--themeDotBorder", "#24292e");
    document.documentElement.style.setProperty(
      "--previewBg",
      "rgb(251, 249, 243, 0.8)"
    );
    document.documentElement.style.setProperty("--previewShadow", "#f0ead6");
    document.documentElement.style.setProperty("--buttonColor", "black");
  }

  if (mode === "green") {
    document.documentElement.style.setProperty("--mainColor", "#606B56");
    document.documentElement.style.setProperty("--secondaryColor", "#515a48");
    document.documentElement.style.setProperty("--borderColor", "#161914");
    document.documentElement.style.setProperty("--mainText", "#fff");
    document.documentElement.style.setProperty("--secondaryText", "#eeeeee");
    document.documentElement.style.setProperty("--themeDotBorder", "#FFF");
    document.documentElement.style.setProperty(
      "--previewBg",
      "rgb(81, 90, 72, 0.8)"
    );
    document.documentElement.style.setProperty("--previewShadow", "#2a2f25");
    document.documentElement.style.setProperty("--buttonColor", "#669966");
  }
  if (mode === "blue") {
    document.documentElement.style.setProperty("--mainColor", "#15202B");
    document.documentElement.style.setProperty("--secondaryColor", "#192734");
    document.documentElement.style.setProperty("--borderColor", "#164D56");
    document.documentElement.style.setProperty("--mainText", "#fff");
    document.documentElement.style.setProperty("--secondaryText", "#eeeeee");
    document.documentElement.style.setProperty("--themeDotBorder", "#FFF");
    document.documentElement.style.setProperty(
      "--previewBg",
      "rgb(25, 39, 52, 0.8)"
    );
    document.documentElement.style.setProperty("--previewShadow", "#111921");
    document.documentElement.style.setProperty("--buttonColor", "#17a2b8");
  }
  localStorage.setItem("mode", mode);
};

export default handleTheme;
