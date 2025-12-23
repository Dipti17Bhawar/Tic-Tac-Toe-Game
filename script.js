 let board = Array(9).fill("");
    let currentPlayer = "X";
    let gameOver = false;
    let playerNames = {};

    const winPatterns = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    function startGame() {
      const p1 = document.getElementById("player1").value || "Player 1";
      const p2 = document.getElementById("player2").value || "Player 2";

      playerNames = { X: p1, O: p2 };

      document.getElementById("playerInput").style.display = "none";
      document.getElementById("gameSection").style.display = "block";

      updateCurrentPlayer();
    }

    function makeMove(index) {
      if (board[index] !== "" || gameOver) return;

      board[index] = currentPlayer;
      document.getElementsByClassName("cell")[index].innerText = currentPlayer;

      if (checkWinner()) {
        alert(`${playerNames[currentPlayer]} Wins!`);
        gameOver = true;
        return;
      }

      if (board.every(cell => cell !== "")) {
        alert("It's a Draw!");
        gameOver = true;
        return;
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
      updateCurrentPlayer();
    }

    function updateCurrentPlayer() {
      document.getElementById("currentPlayer").innerText =
        `Current Player: ${playerNames[currentPlayer]} (${currentPlayer})`;
    }

    function checkWinner() {
      return winPatterns.some(pattern =>
        pattern.every(i => board[i] === currentPlayer)
      );
    }

    function resetGame() {
      board.fill("");
      gameOver = false;
      currentPlayer = "X";
      updateCurrentPlayer();

      document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
    }