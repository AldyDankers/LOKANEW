<?php 

class Sistem_Integrated extends CI_Controller {
	public function index(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/Lini_Bisnis/Sistem_Integrated');
		$this->load->view('web-loka/template/footer');
	}
	public function Data_Center(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/sistem_integrated/Data_Center');
		$this->load->view('web-loka/template/footer');
	}
	public function Sistem_Integrated_Isi(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/sistem_integrated/Sistem_Integrated_Isi');
		$this->load->view('web-loka/template/footer');
	}
	public function SAP(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/sistem_integrated/SAP');
		$this->load->view('web-loka/template/footer');
	}
}

?>