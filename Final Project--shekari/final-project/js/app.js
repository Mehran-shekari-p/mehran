'use strict';
$(document).ready(init);

function init() {


    // home page--------------------------
    var app = {
        'dom': {
            '$output_h': $('#output1'),

            '$output_us': $('#output2'),

            '$output_pos': $('#output3'),

            '$out_pos': $('#out_pos'),

            '$output_job': $('#outputjob'),
            '$output_job2': $('#outputjob2'),
            '$output_job3': $('#outputjob3'),

            '$text': $('.text'),
            '$email': $('.email'),
            '$pass': $('.pass'),
            '$btn': $('.sub'),

            'user_template': $('#user-template').html(),
            'user_template2': $('#user-template2').html(),
            'user_template3': $('#user-template3').html(),


            'scrooltop': $('.scrool'),
            '$spantype': $('.data-type'),
        },
        'start': function() {
            app.ajaxengine('GET', 'https://api.myjson.com/bins/b6eod', app.home_ajax);
            app.ajaxengine('GET', 'https://api.myjson.com/bins/et5gt', app.us_ajax);
            app.ajaxengine('GET', 'https://api.myjson.com/bins/1f6qj1', app.post_ajax);
            app.ajaxengine('GET', 'https://api.myjson.com/bins/1d62sd', app.job_ajax);

            app.eventlistner();

            app.scrool();
        },


        // eventlistner-----------------------------------------
        'eventlistner': function() {
            this.dom.$btn.on('click', app.form_success)
        },


        // ajax engin------------------------------------------
        'ajaxengine': function(method, url, callback) {
            $.ajax({
                'type': method,
                'url': url,
                'success': callback,
            })
        },

        // home ajax stsrts here---------------------------------
        'home_ajax': function(data) {

            var template = Handlebars.compile(app.dom.user_template);
            app.dom.$output_h.html(template(data.jobs));
            $('.preloader').css('display', 'none');

            app.home_ajax_1(data);
        },
        'home_ajax_1': function(data) {
            console.log(data);
        },
        // about us ajax starts here----------------------------
        'us_ajax': function(data) {
            var template = Handlebars.compile(app.dom.user_template);
            app.dom.$output_us.html(template(data));

            $('.preloader').css('display', 'none');
        },
        // post ajax starts here--------------------------------
        'post_ajax': function(data) {
            var template = Handlebars.compile(app.dom.user_template);
            app.dom.$output_pos.html(template(data));
            $('.preloader').css('display', 'none');
            app.dom.$out_pos.html(data.length + ' پست به اشتراک گذاشته شد');
        },
        // job details ajax starts here------------------------
        'job_ajax': function(data) {
            var template = Handlebars.compile(app.dom.user_template);
            app.dom.$output_job.html(template(data));
            $('.preloader').css('display', 'none');
            app.job_ajax_1(data.similar);
            app.job_ajax_2(data.skills);
        },

        'job_ajax_1': function(data) {
            var template = Handlebars.compile(app.dom.user_template2);
            app.dom.$output_job2.html(template(data));
        },

        'job_ajax_2': function(data) {
            var template = Handlebars.compile(app.dom.user_template3);
            app.dom.$output_job3.html(template(data));
        },
        //--------------------------------------------------------------------
        'scrool': function() {
            $('.scrool').click(function() {
                $('html').animate({
                    scrollTop: 0,
                }, 2000);
            });
        },
        // post form starts here-----------------------------------------------
        'form_success': function() {

            class Email {
                constructor(name, email, pass) {
                    this.name = name;
                    this.email = email;
                    this.pass = pass;
                }

            }
            var obj = new Email(app.dom.$text.val(), app.dom.$email.val(), app.dom.$pass.val())
            console.log(obj)
        }
    }










    app.start();
}