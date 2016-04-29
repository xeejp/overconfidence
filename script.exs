defmodule Overconfidence do
  use Xee.ThemeScript

  @script Path.join([__DIR__, "script.js"])

  # Callbacks

  def install, do: nil

  def init do
    {:ok, nil}
  end

  def join(data, id) do
  end

  def handle_received(data, received) do
  end

  def handle_received(data, received, id) do
  end
end
