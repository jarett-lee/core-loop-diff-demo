
board = [
	[' ', ' ', ' ', ' ', ' '],
	['1', '1', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', '1', '1', ' ', '1'],
	[' ', ' ', ' ', ' ', ' '],
	]

len = board.length

ssize = 3

ball = {}
ball.x = 2.5
ball.y = 2

v = {}
v.x = 0.5
v.y = 0.5

update = () => {
	start = {}
	end = {}

	start.x = ball.x
	start.y = ball.y

	end.x = ball.x + v.x
	end.y = ball.y + v.y
}

draw_board = () => {
	string = ""

	string += "  "
	for (i = 0; i < ssize * len; i++) {
		b = "" + i
		string += b.charAt(b.length - 1) + " "
	}
	string += "\n"

	for (i = 0; i < ssize * len; i++) {
		b = "" + i
		string += b.charAt(b.length - 1) + " "
		for (j = 0; j < ssize * len; j++) {
			if (ball.x >= i && ball.x < i + 1 && ball.y >= j && ball.y < j + 1) {
				string += "o"
			} else {
				x = parseInt(i / ssize)
				y = parseInt(j / ssize)
				string += board[x][y]
			}
			string += " "
		}
		string += " |"
		string += "\n"
	}

	string += "  "
	for (i = 0; i < ssize * len; i++) {
		b = "" + i
		string += b.charAt(b.length - 1) + " "
	}
	string += "\n"

	console.log(string)
}

function loop() {
	setTimeout(loop, 1000)

	update()
	draw_board()
}
loop()
