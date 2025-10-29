
      jsonpkgs: with pkgs; [
        nodejs_20
        nodePackages.pnpm
        pkgs.python311Packages
        pkgs.busybox
        gcc
        gnumake
        pkg-config
        autoconf
        automake
        libtool
      ]
