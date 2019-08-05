<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vuebnb</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/vue-style.css') }}">
    <script>
        window.vue_bnb_listing_model = '{!! addslashes(json_encode($model)) !!}';
    </script>
</head>
<body>
    <div id="toolbar">
        <img class="icon" src="{{ asset('images/logo.png') }}">
        <h1>vuebnb</h1>
    </div>
    <div id="app"></div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>