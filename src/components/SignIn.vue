<template>
  <div  id="signIn">
    <Header></Header>
      <!-- Hero Section-->
    <section class="hero hero-page gray-bg padding-small">
      <div class="container">
        <div class="row d-flex">
          <div class="col-lg-9 order-2 order-lg-1">
            <h1>Customer zone</h1>
          </div>
          <div class="col-lg-3 text-right order-1 order-lg-2">
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
                <h5>Login</h5>
              </div>
              <div class="block-body">
                <p class="lead">Already our customer?</p>
                <p class="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>

                <p class="mt-5 mb-5">Dont have an account yet? <a href="/signup">Signup  </a></p>
                <hr>
                <form action="https://demo.bootstrapious.com/hub/1-4-0/customer-orders.html" method="get">
                  <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="password" class="form-label">Password</label>
                    <input id="password" type="password" class="form-control">
                  </div>
                  <div class="form-group text-center">
                    <button type="submit" class="btn btn-primary"><i class="fa fa-sign-in"></i> Log in</button>
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
	name: 'SignIn'
};
</script>
