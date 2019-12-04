$(document).ready(function() {
    var days_of_week=["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];

    var list_of_months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var months={
        "January":{
            number_of_days:31,
            special_events:{}
        },
        "February":{
            number_of_days:28,
            special_events:{}
        },
        "March":{
            number_of_days:31,
            special_events:{}
        },
        "April":{
            number_of_days:30,
            special_events:{}
        },
        "May":{
            number_of_days:31,
            special_events:{}
        },
        "June":{
            number_of_days:30,
            special_events:{}
        },
        "July":{
            number_of_days:31,
            special_events:{}
        },
        "August":{
            number_of_days:31,
            special_events:{}
        },
        "September":{
            number_of_days:30,
            special_events:{}
        },
        "October":{
            number_of_days:31,
            special_events:{}
        },
        "November":{
            number_of_days:30,
            special_events:{}
        },
        "December":{
            number_of_days:31,
            special_events:{}
        }
    };

    var current_date=new Date();
    var current_month=list_of_months[current_date.getMonth()];
    var current_year=current_date.getFullYear();


    function set_days(){
        var number_of_days=months[current_month].number_of_days;
        var first_day_of_week=new Date(current_month+" 1, "+current_year).getDay();
        $(".day_label").each(function(){
            $(this).text("");
        });
        for (var i=0;i<number_of_days;i++){
            $(".day_label:eq("+(i+first_day_of_week)+")").text((i+1).toString());
        }
        $(".calendar_title").text(current_month+" "+current_year);
        $(".calendar_title").append(" (Source: <a href='https://www.iconfinder.com/icons/809499/forward_media_control_multimedia_next_track_icon'>IconFinder</a>)");
    }


    function next_month(){
        if (current_month=="December"){
            current_month="January";
            current_year=(parseInt(current_year)+1).toString();
        }
        else{
            current_month=list_of_months[list_of_months.indexOf(current_month)+1];
        }
        set_days();
    }

    function previous_month(){
        if (current_month=="January"){
            current_month="December";
            current_year=(parseInt(current_year)-1).toString();
        }
        else{
            current_month=list_of_months[list_of_months.indexOf(current_month)-1];
        }
        set_days();
    }

    set_days();

    $("#next_month").on("click", function(){
        next_month();
    });

    $("#previous_month").on("click", function(){
        previous_month();
    });



    function day(times, events){
        this.times=times;
        this.events=events;
    }
    var calendar={
        monday: new day(["8:00pm - 9:00pm", "8:00pm - 9:00pm"], ["Fundamentals Class Practice", "Regular Class Practice"]),

        tuesday: new day([], ["No Practice Today"]),

        wednesday: new day(["7:30pm - 8:30pm"], ["Regular Class Practice"]),

        thursday: new day([], ["No Practice Today"]),

        friday: new day(["6:30pm - 7:30pm", "6:30pm - 7:30pm"], ["Fundamentals Class Practice", "Regular Class Practice"]),

        saturday: new day([],["No Practice Today"]),

        sunday:new day([],["No Practice Today"])
    };

    var string_versions={
        'Sunday':calendar.sunday,
        'Monday':calendar.monday,
        'Tuesday':calendar.tuesday,
        'Wednesday':calendar.wednesday,
        'Thursday':calendar.thursday,
        'Friday':calendar.friday,
        'Saturday':calendar.saturday
    };

    $(".day_label").on("click", function(){
        $(".times").empty();
        $(".events").empty();
        var checked_id=this.id;
        var current_day=string_versions[checked_id.slice(0,checked_id.length-6)];
        var number_of_events=current_day.times.length;
        if (number_of_events==0){
            $(".times").append("<li> Nothing Today</li>");
            $(".events").append("<li> No events are planned for today</li>")
        }
        else{
            for (var i=0;i<number_of_events;i++){
                $('.times').append("<li>"+current_day.times[i]+"</li>");
                $('.events').append("<li>"+current_day.events[i]+"</li>");
            }
        }
        $(".pop_up").removeClass("hidden");

    });


});
