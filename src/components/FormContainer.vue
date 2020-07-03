<template>
  <div class="form-container">
    <b-modal :visible="successModal" title="Send Successfully" centered>
      <b-icon class="icon" variant="primary" icon="hand-thumbs-up"></b-icon>
      <h5 class="my-4">Will get back to you as soon as possible</h5>
    </b-modal>

    <b-modal :visible="errorModal" title="Opps Something goes wrong !!!!!" centered>
      <b-icon class="icon" variant="primary" icon="exclamation-diamond-fill"></b-icon>
      <h5 class="my-4">
        Seems like something went wrong. Kindly <span @click="openEmail" class="text">email</span> me.
      </h5>
    </b-modal>

    <b-form class="form-group-parent" @submit="handleSubmit">
      <b-form-group label="Your Name:">
        <b-form-input v-model="form.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>
      <b-form-group label="Email address:">
        <b-form-input v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
      </b-form-group>

      <b-form-group label="Subject:">
        <b-form-input v-model="form.subject" required placeholder="Enter subject"></b-form-input>
      </b-form-group>
      <b-form-group label="Message:">
        <b-form-textarea
          placeholder="Enter message"
          required
          rows="3"
          no-resize
          v-model="form.message"
        ></b-form-textarea>
      </b-form-group>
      <div class="btn-container">
        <b-button pill class="btn ml-2" type="submit" size="lg">Send Message</b-button>
      </div>
      <b-card-text class="text-center">
        Don't like forms? Send me an <span @click="openEmail" class="text">Email</span>
      </b-card-text>
    </b-form>
  </div>
</template>

<script>
import { formSchema } from '../validation/validation';
import { sendEmail } from '../api/api';
export default {
  name: 'FormContainer',
  data() {
    return {
      form: {
        email: '',
        name: '',
        subject: '',
        message: '',
      },
      successModal: false,
      errorModal: false,
    };
  },
  methods: {
    openEmail() {
      window.open('mailto:sk.zeeshan1992@gmail.com', '_blank');
    },
    handleSubmit(e) {
      e.preventDefault();
      const { name, email, subject, message } = this.form;
      const payload = {
        name,
        email,
        subject,
        message,
      };
      formSchema.validate(payload).then((payload) => {
        const addEnvironment = {
          ...payload,
          environment: process.env.NODE_ENV === 'development' ? 'development' : 'production',
        };
        this.$emit('sendingEmail', true);
        sendEmail(addEnvironment)
          .then((response) => {
            if (response.status === 200) {
              this.form = {
                email: '',
                name: '',
                subject: '',
                message: '',
              };
              this.$emit('sendingEmail', false);
              this.successModal = true;
            }
          })
          .catch((err) => {
            this.errorModal = true;
            console.warn(err);
          });
      });
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
}
.form-group-parent {
  width: 80%;
}
.btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.btn {
  background: linear-gradient(to right, #56ccf2, #2f80ed);
  border-style: none;
  transition: transform 0.5s ease;
}
.btn:hover {
  transform: scale(1.1);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
}

.text {
  margin-left: 5px;
  cursor: pointer;
  font-weight: 500;
  color: #2f80ed;
}
.center {
  text-align: center !important;
}

.icon {
  height: 30px;
  width: 30px;
  cursor: pointer;
}
.text-center {
  margin-top: 4px;
}
.modal-body {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
}
</style>
