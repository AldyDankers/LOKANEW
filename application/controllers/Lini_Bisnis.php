<?php 

class Lini_Bisnis extends CI_Controller {
	public function index(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/lini_bisnis/Lini_Bisnis');
		$this->load->view('web-loka/template/footer');
	}
	public function Distribution(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/lini_bisnis/Distribution');
		$this->load->view('web-loka/template/footer');
	}
	public function Sistem_Integrated(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/lini_bisnis/Sistem_Integrated');
		$this->load->view('web-loka/template/footer');
	}
	public function Service(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/lini_bisnis/Service');
		$this->load->view('web-loka/template/footer');
	}
}

?>