<template>
  <div class="flex justify-center items-center q-electron-drag" style="height: 100%">
    <div class="row base-card-shadow electron-hide" style="width: 60vw; min-width: 300px">
      <div class="col-6 flex justify-center items-center" v-show="$q.screen.gt.sm">
        <q-img
          width="100%"
          height="100%"
          src="https://images.unsplash.com/photo-1654097512267-9281e2f76e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        >
        </q-img>
      </div>
      <q-separator vertical inset v-if="$q.screen.gt.sm" />
      <div class="col flex justify-center items-center">
        <q-form @submit="login" :greedy="true">
          <q-card square style="min-width: 290px; height: 100%; width: 60%" class="no-shadow">
            <q-card-section class="text-center">
              <h3 class="text-uppercase">Login</h3>
              <!-- User -->
              <q-input autofocus bottom-slots label="User" v-model="store.User.UserName" :rules="[(val) => !!val || '']">
                <!-- :attributes="{ tabindex: '0' }" -->
                <template v-slot:prepend>
                  <q-icon name="account_circle" />
                </template>
              </q-input>
              <!-- Password -->
              <q-input
                bottom-slots
                hint=""
                v-model="store.User.Password"
                label="Password"
                :type="store.Option.ShowPassword ? 'text' : 'password'"
                :rules="[(val) => !!val || '']"
              >
                <!-- :attributes="{ tabindex: '1' }" -->
                <template v-slot:prepend>
                  <q-icon name="vpn_key" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="!store.Option.ShowPassword ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="store.Option.ShowPassword = !store.Option.ShowPassword"
                  />
                </template>
              </q-input>

              <!-- button login -->
              <q-btn
                :loading="store.Option.Loading"
                class="logon-btn bg-logon-card-input"
                text-color="white"
                label="Login"
                style="font-size: large"
                type="submit"
              >
              </q-btn>
              <p class="text-grey q-mt-lg">
                Developed with
                <q-icon size="sm" name="las la-heartbeat" color="pink" class="q-mr-sm q-ml-sm"></q-icon>+
                <q-icon size="sm" name="lab la-vuejs" color="green" class="q-mr-sm"></q-icon>
              </p>
            </q-card-section>
          </q-card>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//import
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useLoginStore } from '../stores/login';
//user
const $q = useQuasar();
const $router = useRouter();
const store = useLoginStore();
const login = () => {
  store.toggleLoading();
  const lt = setTimeout(() => {
    $router.push('/home').then(() => {
      clearTimeout(lt);
      store.toggleLoading();
      store.$reset();
    });
  }, Math.random() * 4000);
};
</script>

<style scoped>
.base-card-shadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
  border-radius: 4px;
}

.logon-btn {
  font-size: large;
  margin-top: 0px;
  margin-bottom: 20px;
  width: 100%;
}

.bg-logon-card-input {
  background: linear-gradient(to right, #36d1dc 1%, #5b86e5 99%);
  transition: all 0.3s ease-in-out;
  background-size: 200% auto;
  margin-top: 10px;
}

.bg-logon-card-input:hover {
  background-position: right center;
  box-shadow: 0 12px 20px -11px #5b86e5;
}
</style>
