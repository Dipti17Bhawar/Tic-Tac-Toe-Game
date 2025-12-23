const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
      let currentPlayer = "Player1";

      const renderBoard = () => {
        const allBoxes = document.querySelectorAll(".cell");
        allBoxes.forEach((box, index) => {
          if (board[index] === "Player2") {
            box.innerHTML = '<img class="player" src="player2.png" alt="X" />';
          } else if (board[index] === "Player1") {
            box.innerHTML = '<img class="player" src="player1.png" alt="O" />';
          } else {
            box.innerHTML = "";
          }
        });
      };
      renderBoard();

      const makeMove = (index) => {
        if (board[index] !== -1) {
          alert("Invalid Move");
          return;
        }

        board[index] = currentPlayer;

        if (currentPlayer === "Player1") {
          currentPlayer = "Player2";
        } else {
          currentPlayer = "Player1";
        }
        const currentPlayerElement = document.getElementById("current-player");
        currentPlayerElement.innerText = `Current Player: ${currentPlayer}`;
        renderBoard();
        checkWinner();
      };

      function resetBoard() {
        board.fill(-1);
        renderBoard();
      }

      function isPlayerPresent(places, player) {
        const [a, b, c] = places;
        return (
          board[a] === player && board[b] === player && board[c] === player
        );
      }

      function checkWinner() {
        if (isPlayerPresent([0, 1, 2], "Player1")) {
          alert("Player1 wins");
        } else if (isPlayerPresent([3, 4, 5], "Player1")) {
          alert("Player1 wins");
        } else if (isPlayerPresent([6, 7, 8], "Player1")) {
          alert("Player1 wins");
        } else if (isPlayerPresent([0, 4, 8], "Player1")) {
          alert("Player1 wins");
        } else if (isPlayerPresent([2, 4, 6], "Player1")) {
          alert("Player1 wins");
        } else if (isPlayerPresent([0, 3, 6], "Player1")) {
          alert("Player1 wins");
        } else if (isPlayerPresent([1, 4, 7], "Player1")) {
          alert("Player1 wins");
        } else if (isPlayerPresent([2, 5, 8], "Player1")) {
          alert("Player1 wins");
        }

        if (isPlayerPresent([0, 1, 2], "Player2")) {
          alert("Player2 wins");
        } else if (isPlayerPresent([3, 4, 5], "Player2")) {
          alert("Player2 wins");
        } else if (isPlayerPresent([6, 7, 8], "Player2")) {
          alert("Player2 wins");
        } else if (isPlayerPresent([0, 4, 8], "Player2")) {
          alert("Player2 wins");
        } else if (isPlayerPresent([2, 4, 6], "Player2")) {
          alert("Player2 wins");
        } else if (isPlayerPresent([0, 3, 6], "Player2")) {
          alert("Player2 wins");
        } else if (isPlayerPresent([1, 4, 7], "Player2")) {
          alert("Player2 wins");
        } else if (isPlayerPresent([2, 5, 8], "Player2")) {
          alert("Player2 wins");
        }
      }