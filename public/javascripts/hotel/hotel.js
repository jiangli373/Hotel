/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-12-5
 * Time: 下午3:03
 * To change this template use File | Settings | File Templates.
 */

var hotel = {
    init:function () {

    }
};
$(hotel.init());

(function (user) {

    hotel.headerView = Backbone.View.extend({
        tagName:"div",
        className:"navbar navbar-inverse navbar-fixed-top",
        render:function () {
            var source = $("#header").html();
            var template = Handlebars.compile(source);
            var html = template();
            $(html).appendTo(this.$el);
            return this;
        },
        events:{
            "click ul li":"showContent",
            "click .loginbt":"login",
            "click .regesbt":"regesit"
        },
        login:function () {
            var loginView = new hotel.loginView;
            $(loginView.render().$el).modal({
                show:true
            });
        },
        regesit:function () {
            var regeistView = new hotel.regeistView;
            $(regeistView.render().$el).modal({
                show:true
            });
        },
        showContent:function (e) {
            $(e.target).parent().parent().children("li").removeClass("active");
            $(e.target).parent().addClass("active");
            $(".middleview").empty();
            if ($(e.target).parent().hasClass("index")) {
                var indexView = new hotel.indexView;
                indexView.render().$el.appendTo(".middleview");
            } else if ($(e.target).parent().hasClass("hotelname")) {
                $(".middleview .container-fluid").empty();
                var slidecontentView = new hotel.slidecontentView;
                slidecontentView.render().$el.appendTo(".middleview");
            } else if ($(e.target).parent().hasClass("countryname")) {
                var slidecontentView = new hotel.slidecontentView;
                slidecontentView.render().$el.appendTo(".middleview");

            } else if ($(e.target).parent().hasClass("contactus")) {

            } else if ($(e.target).parent().hasClass("about")) {
                var contentView = new hotel.contentView;
                contentView.render().$el.appendTo(".middleview");
            }
        }
    });

    hotel.indexView = Backbone.View.extend({
        tagName:"div",
        className:"container",
        render:function () {
            var source = $("#indexView").html();
            var template = Handlebars.compile(source);
            var html = template();
            $(html).appendTo(this.$el);
            return this;
        }
    });

    hotel.contentView = Backbone.View.extend({
        tagName:"div",
        className:"container",
        render:function () {
            var source = $("#container").html();
            var template = Handlebars.compile(source);
            var html = template();
            $(html).appendTo(this.$el);
            return this;
        }
    });

    hotel.slidecontentView = Backbone.View.extend({
        tagName:"div",
        className:"container-fluid",
        render:function () {
            $(this).css({
                "-webkit-transform-style":"preserve-3d",
                "-webkit-transform":"translate(0px, 0) scale(1,1)",
                "-webkit-transition-duration":"0.5s"
            });
            var slideBarView = new hotel.slideBarView;
            slideBarView.render().$el.appendTo(this.$el);
            var center_contentView = new hotel.center_contentView;
            center_contentView.render().$el.appendTo(this.$el);
            return this;
        }
    });

    hotel.slideBarView = Backbone.View.extend({
        tagName:"div",
        className:"span3",
        render:function () {
            var source = $("#slideBar").html();
            var template = Handlebars.compile(source);
            var html = template();
            $(html).appendTo(this.$el);
            return this;
        },
        events:{
            "click li":"showSlibarDetail"
        },
        showSlibarDetail:function (e) {
            $(e.target).parent().parent().children("li").removeClass("active");
            $(e.target).parent().addClass("active");
            var title = $(e.target)[0].innerText;
            $(".middleview .container-fluid .span9").remove();
            var data = {title:title, content:"亚洲（Asia）是亚细亚洲的简称，是世界七大洲中面积最大的洲。其绝大部分土地位于东半球和北半球。传统上被定义为非洲-亚欧大陆的一部分。跨越经纬度十分广，东西时差达11小时。亚洲地跨寒、温、热三带，气候基本特征是大陆性气候强烈，季风性气候典型，气候类型复杂。在地理上习惯分为东亚、东南亚、南亚、西亚、中亚和北亚。2000年人口达36.72亿人，约占世界总人口的60.5%。"};
            var center_contentView = new hotel.center_contentView;
            center_contentView.model = data;
            center_contentView.render().$el.appendTo(".middleview .container-fluid");
        }
    });

    hotel.center_contentView = Backbone.View.extend({
        tagName:"div",
        className:"span9",
        render:function () {
            if (this.model != undefined) {
                var source = $("#center-content").html();
                var template = Handlebars.compile(source);
                var html = template(this.model);
                $(html).appendTo(this.$el);
            } else {
                var data = {title:"亚洲", content:"亚洲（Asia）是亚细亚洲的简称，是世界七大洲中面积最大的洲。其绝大部分土地位于东半球和北半球。传统上被定义为非洲-亚欧大陆的一部分。跨越经纬度十分广，东西时差达11小时。亚洲地跨寒、温、热三带，气候基本特征是大陆性气候强烈，季风性气候典型，气候类型复杂。在地理上习惯分为东亚、东南亚、南亚、西亚、中亚和北亚。2000年人口达36.72亿人，约占世界总人口的60.5%。"};
                var source = $("#center-content").html();
                var template = Handlebars.compile(source);
                var html = template(data);
                $(html).appendTo(this.$el);
            }

            return this;
        }
    });

    hotel.footerView = Backbone.View.extend({
        tagName:"footer",
        className:"navbar-fixed-bottom",
        render:function () {
            var source = $("#footer").html();
            var template = Handlebars.compile(source);
            var html = template();
            $(html).appendTo(this.$el);
            return this;
        }
    });

    hotel.loginView = Backbone.View.extend({
        tagName:"div",
        className:"modal hide fade",
        attributes:{
            "tabindex":"-1",
            "role":"dialog",
            "aria-labelledby":"myModalLabel",
            "aria-hidden":"true"
        },
        render:function () {
            var source = $("#loginView").html();
            var template = Handlebars.compile(source);
            var html = template();
            $(html).appendTo(this.$el);
            return this;
        },
        events:{
            "click bt_login":"login"
        },
        login:function(){

        }
    });

    hotel.regeistView = Backbone.View.extend({
        tagName:"div",
        className:"modal hide fade",
        attributes:{
            "tabindex":"-1",
            "role":"dialog",
            "aria-labelledby":"myModalLabel",
            "aria-hidden":"true"
        },
        render:function () {
            var source = $("#regeistView").html();
            var template = Handlebars.compile(source);
            var html = template();
            $(html).appendTo(this.$el);
            return this;
        }
    });

})(hotel);