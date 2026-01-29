
      jsonpkgs: with pkgs; [
        nodejs_20
        nodePackages.pnpm
        pkgs.python315Packages
        pkgs.busybox
        gcc
        gnumake
        pkg-config
        autoconf
        automake
        libtool
        pkgs.nox
      ]
