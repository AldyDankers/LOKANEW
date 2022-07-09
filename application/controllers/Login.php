<?php 

class Login extends CI_Controller {
	public function index(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/login/Login');
		$this->load->view('web-loka/template/footer');
	}
}

?>