<?php 

class Contact extends CI_Controller {
	public function index(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/contact/Contact');
		$this->load->view('web-loka/template/footer');
	}
}

?>