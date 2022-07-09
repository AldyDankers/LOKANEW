<?php 

class Service extends CI_Controller {
	public function index(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/service/Service');
		$this->load->view('web-loka/template/footer');
	}
	public function IT_Consulting(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/service/IT_Consulting');
		$this->load->view('web-loka/template/footer');
	}
	public function IT_Design(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/service/IT_Design');
		$this->load->view('web-loka/template/footer');
	}
	public function IT_Implementation(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/service/IT_Implementation');
		$this->load->view('web-loka/template/footer');
	}
	public function Training(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/service/Training');
		$this->load->view('web-loka/template/footer');
	}
}

?>