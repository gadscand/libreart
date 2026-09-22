defmodule Libreart.Build do
  @moduledoc "Builds the static Libreart site for GitHub Pages."

  def run do
    root = File.cwd!()
    public = Path.join(root, "public")
    File.rm_rf!(public)
    File.mkdir_p!(public)

    artworks =
      root
      |> Path.join("data/artworks.exs")
      |> Code.eval_file()
      |> elem(0)

    assigns = [artworks: artworks]
    template = EEx.eval_file(Path.join(root, "priv/templates/index.html.eex"), assigns: assigns)

    File.write!(Path.join(public, "index.html"), template)
    File.cp_r!(Path.join(root, "assets"), Path.join(public, "assets"))
    IO.puts("Built Libreart in #{public}")
  end
end