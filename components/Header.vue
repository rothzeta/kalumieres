<template>
    <header>
  <div class="logo">
    <a href="/">
    <img src="~/assets/img/ka-lumieres-lampe-only.png" alt="Ka Lumières">
  </a>
  </div>
  <nav>
    <ul class="mb-0">
      <li class="d-none d-md-block"><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">A&nbsp;propos</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
</template>
<style>
/** on mobile should not be position: fixed */

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

/** on mobile should not be position: fixed */
@media (max-width: 768px) {
  header {
    position: relative;
  }
}

.logo img {
  height: 50px;
}

nav ul {
  display: flex;
  list-style: none;
}

nav li {
  margin: 0 10px;
}

nav a {
  color: #333;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>