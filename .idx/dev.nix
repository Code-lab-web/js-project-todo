{ pkgs ? import <nixpkgs> {} }: {
  packages = with pkgs; [
    nodejs_20
    nodePackages.pnpm
    python39
    busybox
    gcc
    gnumake
    pkg-config
    autoconf
    automake
    libtool
    nox
  ];
}
