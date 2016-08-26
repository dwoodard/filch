<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>


<div id="app">

    <!--  Need to load from filch.css  -->
    <link rel="stylesheet" href=""/>

    <!-- Need to load from filch.vue -->
    <template id="filch-template">
        <div class="filch">
            <ul class="filch-conatiner">
                <li class="filch-primary">Location</li>
                <li class="filch-secondary"> lp-203</li>
                <li class="filch-secondary"> lp-202</li>
            </ul>
            <ul class="filch-conatiner">
                <li class="filch-primary">Category</li>
                <li class="filch-secondary">Hardware</li>
            </ul>

            <div class="filch-search">
                <input type="search" placeholder="input goes here"/>
            </div>
        </div>
    </template>

    <!-- index.html -->
    <filch></filch>


</div>


<!-- Filch Componets -->
<script src="js"></script>

<script>
    var vm = new Vue({
        el: "body"
    })
</script>
</body>
</html>