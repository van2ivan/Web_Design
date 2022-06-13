<template>
 <div class="container mt-5 d-flex justify-content-center">
          <div class="card p-3">
              <div class="d-flex align-items-center">
                  <div class="image"> <img src="images\profile.jpg" class="rounded" width="155"> </div>
                  <div class="ml-3 w-100">
                      <h4 class="mb-0 mt-0">Ivan Ius</h4> <span>Student</span>
                      <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                          <div class="d-flex flex-column"> <span class="articles">Articles</span> <span class="number1">7</span> </div>
                          <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2">550</span> </div>
                          <div class="d-flex flex-column"> <span class="rating">Rating</span> <span class="number3">9.3</span> </div>
                      </div>
                      <div class="button mt-2 d-flex flex-row align-items-center"> <button class="btn btn-sm btn-outline-primary w-100">Git</button> <button class="btn btn-sm btn-primary w-100 ml-2">LinkedIn</button> </div>
                  </div>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
        if (from.meta.auth === true){
            next();
        }
        else {
            next('/index');
        }
        to.meta.auth = from.meta.auth;
    },
}
</script>
