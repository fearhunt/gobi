import swal from 'sweetalert';

export const actions = {
  displaySuccess(context, res) {
    console.log(res);
    swal("Notifikasi", res.message, "success");
  },

  displayError(context, err) {
    console.log(err);
    swal("Notifikasi", err.message, "error");
  },

  displayMessage(context, res) {
    console.log(res);
    swal("Notifikasi", res.message);
  }
}