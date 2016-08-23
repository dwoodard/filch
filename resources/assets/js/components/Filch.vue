<template>
    <div class="Filch">
         <span>Filch:</span>
        <input type="text" value=""/>
            <slot></slot>
    </div>
</template>

<script type="application/javascript;version=1.7">
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
      display:inline-block;
  }
</style>