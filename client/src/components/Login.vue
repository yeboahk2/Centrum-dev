<template>
    <div id="main-container">
        <div class="center">
            <img id="logo" src="../assets/Centrum-Logo-WHITE.png" alt="Centrum">
            <div id="box-container">
                <h3 style="margin: 0;">Welcome</h3>
                <input class="login-field" type="email" placeholder="email" v-model="email">
                <input class="login-field" v-bind:type="passwordFieldType" placeholder="password" v-model="password">
                <div class="radio-section">
                    <p>Show password</p> 
                    <label class="switch radio">
                        <input type="checkbox" v-model="showPassword">
                        <span class="slider round"></span>
                    </label>
                </div>
                <button class="big-button">Log In</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data: function() {
        return {
            email: "",
            password: "",
            showPassword: false
        }
    },
    computed: {
        passwordFieldType: function() {
            if (this.showPassword) {
                return "text"
            } else {
                return "password"
            }
        }
    }
}
</script>

<style scoped>
#main-container {
    background: linear-gradient(45deg, #015eea 30%, #00c0fa);
    min-height: 100vh;
    margin: 0;
}

#logo {
    width: 15rem;
}

#box-container {
    background-color: white;
    width: 16rem;
    height: 18rem;
    padding: 1rem;
}

.login-field {
    padding: .4rem 1rem;
    width: 75%;
    margin-top: 1.5rem;
    font-size: 11px;
    border-radius: .2rem;
    border: solid .5px #525252;
}

.radio-section {
    margin: 1rem 2rem;
    width: 75%;
    height: 2rem;
}
    .radio-section p {
        font-size: 12px;
        margin: 0;
        float: left;
    }
    .radio-section .radio {
        float: right;
    }

.big-button {
    width: 13rem;
    padding: .5rem;
    border-radius: .4rem;
    background-color: #015eea;
    color: white;
    border: none;
    outline: none;
    transition: background-color ease-in .3s;
}
    .big-button:hover {
        background-color: #1680c7;
        cursor: pointer;
    }

/*******************SLIDER*********************/
.switch {
  position: relative;
  display: inline-block;
  width: 2.8rem;
  height: 1.3rem;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1rem;
  width: 1rem;
  left: 1.3px;
  bottom: 2.4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>