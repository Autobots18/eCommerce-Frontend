<template>
  <div id="notfound">
    <Header></Header>
    <section class="padding-small">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-10">
            <h2 class="text-superbig mt-5">404</h2>
            <p class="lead">We don't know what what happened but that <strong>page is not here</strong>.</p>
            <p class="lead">Please <a href="#" class="search text-bold">use search</a> or <a href="/" class="text-bold">start from the homepage</a>.</p>
          </div>
          <div class="col-xl-4">
            <img src="../assets/notfound.svg" width="600px" alt="file not found">
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export default {
	components: {
		Header,
		Footer
	},
	name: 'NotFound'
};
</script>

