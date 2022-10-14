function Footer() {
    return (
        <div className="bg-primary p-2 bottom">
            <div className="row">
                <div className="col-4">
                    <p>Site Created by Roger Mullins</p>
                    <p><a href="mailto:rogermullins.mba@gmail.com">Contact the Developer</a></p>
                </div>
                <div className="col-4 text-center">
                    <h2>Open Daily 7 a.m. - 11 p.m.</h2>
                    <p>Reservations Available</p>
                    <p>(859)GIT-GRUB</p>
                    <p>(859) 448-4782</p>
                </div>
                <div className="col-4 text-end">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.211231743067!2d-84.49472698433192!3d38.04216420450247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1665765576576!5m2!1sen!2sus" width="300" height="225" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Footer;