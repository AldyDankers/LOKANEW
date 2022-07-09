<?php 

class Portofolio extends CI_Controller {
	public function index(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/portofolio/Portofolio');
		$this->load->view('web-loka/template/footer');
	}
}

?>