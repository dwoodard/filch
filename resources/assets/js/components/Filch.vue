<template>
    <div class="Filch">
         Filch
            <slot></slot> 

    </div>
</template>

<script>
    export default {
         data:{
             message: function(){
                 return 'this is a default message';
             }
         }
    }
</script>

<style>
  .Filch{
      border: 1px solid #2526ff; 
      padding: 10px;
      margin-bottom:1vh;
      height:10vh;
      line-height:10vh;
  }
</style>