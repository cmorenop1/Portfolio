exports.home = (req, res, next) => {
    res.render(  'home'    , {title: 'Home'}       );
}

exports.about = (req, res, next) => {
    res.render('about', {
        title: 'About'
    });
}

exports.projects = (req, res, next) => {
    res.render('projects', {
        title: 'Projects'
    });
}

exports.services = (req, res, next) => {
    res.render('services', {
        title: 'Services'
    });
}

exports.contact = (req, res, next) => {
    res.render('contact', {
        title: 'Contact'
    });
}
exports.login = (req, res, next) => {
    res.render('login', {
        title: 'Login'
    });
}
exports.business = (req, res, next) => {
    res.render('business', {
        title: 'Business Contact'
    });
}