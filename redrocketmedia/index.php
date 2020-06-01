<!DOCTYPE HTML>
<html lang="ru">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>RedRocketMedia Test Task</title>

		<link rel="stylesheet" type="text/css" href="dist/css/style.css">
	</head>

	<body>
		<div class="container">

		<?php require_once 'inc/functions.php'; ?>
		
		<h1>Rating</h1>

		<div class="rating">
			<div id="rating-stars" class="rating-stars not-voiced">
				<?php for ($i = 5; $i >= 1; $i--): ?>
				<input type="radio" name="rating" id="mark<?php echo $i; ?>" <?php echo isChecked($i); ?>>
				<label for="mark<?php echo $i; ?>">
					<span class="rating-stars__img" data-rating="<?php echo $i; ?>" onclick="doRating(this)"></span>
				</label>
				<?php endfor ?>
			</div>
			<div id="rating-num" class="rating-num"><?php echo getRatingData('count') ?></div>
		</div>
		<div id="rating-result" class="text-hint rating-result"></div>
		<!-- end rating -->


		<h1>Progress Bar</h1>
		<div id="progress-bar-current" style="display: none;">1</div>
		<div id="progress-bar" class="progress-bar">
			<div id="progress-bar-inner" class="progress-bar-inner">
				<span class="progress-bar-percentage" id="progress-bar-percentage">1%</span>
			</div>
		</div>

		<select id="progress-bar-select" class="progress-bar-select">
			<option value="8" selected >8</option>
			<option value="16">16</option>
			<option value="32">32</option>
			<option value="64">64</option>
		</select>
		<input type="submit" name="progress" value="go" onclick="changeProgressBar()">
		<div id="progress-bar-result" class="progress-bar-result text-hint"></div>
		<!-- end progress bar -->


		<h1>VanillaJS Ajax</h1>
		<div class="text-hint">Get interesting facts about numbers with <a target="_blanc" href="http://numbersapi.com/">http://numbersapi.com</a></div>
		<form onsubmit="event.preventDefault(); getNumberApi(); ">
			<input type="number" id="numbersapi" name="numbersapi" placeholder="enter any number">
			<input type="submit" value="submit" onclick="">
			<div id="numbersapi-result"></div>
		</form>



		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>

		<div class="text-hint">
			

			<p>1. Реализовать оценку и показ рейтинга.<br />
			Пример: https://prnt.sc/pv8j4j</p>

			<p>Дополнительные условия:<br />
			Пользователь может голосовать 1 раз, рейтинг отображает среднюю оценку.<br />
			Пример у нас на сайте: https://lgototvet.ru/news/v-rossijskih-shkolah-vvedut-razdelnoe-obuchenie/</p>

			<p>2. Сверстать прогресс-бар.<br />
			Пример: https://prnt.sc/pv8n75</p>

			<p>Дополнительные условия:<br />
			Зеленая шкала имеет градиент: от 90EE90 до 8FBC8F<br />
			Выпадающий список имеет значения: 8, 16, 32, 64<br />
			По умолчанию прогресс бар имеет значение 1%<br />
			При нажатии кнопки &quot;go&quot; прибавляется к бару значение установленное в выпадающем списке.<br />
			На шкале отображаем %.</p>

			<p>3. Написать пример отправки и обработки аякс запроса(только js)</p>

			<p>При реализации задач, запрещается использовать сторонние(подключаемые) js/css библиотеки(в том числе и jQuery).</p>

			<p>Результат 1, 2 и 3й задачи должен быть на одной странице, оформлен как один проект.<br />
			Обязательным условием является использование gulp для минификации файлов js/css.</p>

			<p>Результат опубликовать на github, прислать ссылку.</p>

			<p>Оформление, подход к задачам и написанию кода на ваше усмотрение(как вы считаете правильным).</p>

			<p>Если возникнут вопросы/сложности, нужно постараться решить их самостоятельно. Если какое то из условий вам не понятно, сделайте как считаете нужным и скажите об этом в комментарии.</p>

			<p>Срок на выполнение тестового задания, до 11:00 по МСК 18.11.19.</p>

			<p><a target="_blank" href="https://github.com/dimadroog/redrocketmedia">https://github.com/dimadroog/redrocketmedia</a></p>
		</div>

	</div> <!-- .container -->

	<script type="text/javascript" src="dist/js/script.js"></script>


	</body>
</html>



