nix
{ pkgs ? import <nixpkgs> {} }:

let
  my-packages = with pkgs; [
    sudo
  ];
in
pkgs.mkShell {
  buildInputs = my-packages;
}