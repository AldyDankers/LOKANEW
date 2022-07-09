<?php 

class Shop extends CI_Controller {
	public function index(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/shop/Shop');
		$this->load->view('web-loka/template/footer');
	}
}

?>