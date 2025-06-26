<div className="typography-h1 text-primary">Hello world</div>

@layer utilities {
    .typography-h1 {
      font: var(--mui-font-h1);
      letter-spacing: -0.01562em;
    }
    .text-primary {
      color: rgb(var(--mui-palette-primary-mainChannel));
    }
  }