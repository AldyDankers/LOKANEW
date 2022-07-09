<?php 

class Register extends CI_Controller {
	public function index(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/register/Register');
		$this->load->view('web-loka/template/footer');
	}
}

?>