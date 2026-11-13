import board from "../../data/studio-board.json";

export function GET() {
  return new Response(JSON.stringify(board, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
