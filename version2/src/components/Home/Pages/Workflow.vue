<template>
    <div>
        
    </div>
</template>
<script>

</script>
<style scoped>
.features {
  *zoom: 1;
  margin: 0 -15px;
  position: relative;
  z-index: 1; }
  .features:after {
    content: " ";
    clear: both;
    display: block;
    overflow: hidden;
    height: 0; }
  .features:after {
    content: " ";
    height: 50px;
    top: 50px;
    left: 15px;
    right: 15px;
    position: absolute;
    background: url(../../../../img/gn17.png) repeat-x;
    z-index: -1; }
    @media screen and (max-width: 768px) {
      .features:after {
        display: none; } }
  .features .feature-numbered {
    width: 25%;
    float: left;
    padding: 15px;
    text-align: center; }
    @media screen and (max-width: 768px) {
      .features .feature-numbered {
        width: 50%; } }
    @media screen and (max-width: 480px) {
      .features .feature-numbered {
        width: 100%; } }
    .features .feature-numbered .num {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 2px solid #0f75bd;
      color: #0f75bd;
      text-align: center;
      font-size: 36px;
      font-size: 2.25em;
      line-height: 1.8;
      font-weight: 400;
      margin: 0 auto 20px;
      background-color: white;
      box-shadow: 0 0 0 10px white; }
    .features .feature-numbered .feature-title {
      font-size: 20px;
      font-size: 1.25em;
      color: #0f75bd;
      font-weight: 400; }
</style>
