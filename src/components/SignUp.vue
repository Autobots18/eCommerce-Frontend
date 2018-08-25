<template>
  <div id="signUp">
    <Header></Header>
      <!-- Hero Section-->
    <section class="hero hero-page gray-bg padding-small">
      <div class="container">
        <div class="row d-flex">
          <div class="col-lg-9 order-2 order-lg-1 ">
            <h1>Customer zone</h1>
          </div>
          <div class="col-lg-3 text-right order-1 order-lg-2 ">
            <ul class="breadcrumb justify-content-lg-end">
              <li class="breadcrumb-item"><a href="/" class="auth-breadcrumb">Home</a></li>
              <li class="breadcrumb-item active breadcrumb-data">Customer zone</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- text page-->
    <section class="padding-small">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="block">
              <div class="block-header">
                <h5>New account</h5>
              </div>
              <div class="block-body">
                <p class="lead">Not our registered customer yet?</p>
                <p>With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
                <p class="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>

                <p class="mt-5">Already have an account? <a href="/signin">SignIn   </a></p>
                <hr>
                <form action="https://demo.bootstrapious.com/hub/1-4-0/customer-orders.html" method="get">
                  <div class="form-group">
                    <label for="name" class="form-label">Name</label>
                    <input id="name" type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="password" class="form-label">Password</label>
                    <input id="password" type="password" class="form-control">
                  </div>
                  <div class="form-group text-center">
                    <button type="submit" class="btn btn-primary"><i class="icon-profile"></i> Register</button>
                  </div>
                </form>
              </div>
            </div>
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
	name: 'SignUp'
};
</script>
