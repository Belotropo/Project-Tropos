Vagrant.configure("2") do |config|
  config.vm.define "web01" do |web|
    web.vm.box = "eurolinux-vagrant/centos-stream-9"
    web.vm.hostname = "web01"
    web.vm.network "private_network", ip: "192.168.56.10"
  end
  config.vm.define "db01" do |db|
    db.vm.box = "eurolinux-vagrant/centos-stream-9"
    db.vm.hostname = "db01"
    db.vm.network "private_network", ip: "192.168.56.20"
  end

end