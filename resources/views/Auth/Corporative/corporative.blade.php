<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Inicio</title>
        @viteReactRefresh      
        @vite('resources/js/app.js')
    </head>
    <body>
        <div id="sidebar"></div>
        <div id="corporative"></div>
    </body>
</html>