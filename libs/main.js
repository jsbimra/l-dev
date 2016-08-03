
/**
* Defining documentation using jsDoc
*/
/**
* jQuery document ready function to initialze the code once DOM is ready
* @external "jQuery"
* @see {@link http://docs.jquery.com/ The jQuery API}
*/
$(function(){

	/** 
	* Invoking Bootstrap Carousel on dom element with class called .carousel 
	* @external "bootstrap"
	*/
	$('.carousel').carousel({
		  interval: false
	});

	/** 
		*Looping on each carousel item  
	*/
	$('.carousel .item').each(function() {
	    var next = $(this).next();
	    if (!next.length) {
	        next = $(this).siblings(':first');
	    }
	    next.children(':first-child').clone().appendTo($(this));

	    /** Cloning siblings element after next element */
	    for (var i=0;i<5;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));
		}
	});


	//$('#dashboard-datatable').DataTable();

	/* Tooltip for invest widget*/
	$('[data-toggle="tooltip"]').tooltip();
	/*----------- FAQ Accordian ---------------*/

	$(document).on("hide.bs.collapse show.bs.collapse", ".collapse", function(event) {
	    $(this).prev().find(".glyphicon").toggleClass("glyphicon-plus glyphicon-minus");
	    $(this).prev().find("span.pull-right.text-muted").toggleClass("expandir fechar");
	    $(this).parent().find('.panel-heading').toggleClass('active');
	    event.stopPropagation();
	});

	/*----------- ./ FAQ Accordian ---------------*/
});


$(document).on('click', '.jsDropDownMenu', function() {
    console.info('menu item trigger');

    // var $this = $(this),
    //     pos = $this.position();


    // $('.jsDropDownMenu').hide();

    // var menuTargetSel = $this.data('target'),
    //     menuTargetObj = $('#' + menuTargetSel);

    // menuTargetObj.css({
    //     position: 'absolute',
    //     left: pos.left + 20,
    //     top: pos.top,
    //     zIndex: 1000
    // });

    $(".loginDropdown").show();
});


function startIntro(){
var intro = introJs();
  intro.setOptions({
    steps: [
      {
        element: '#step1',
        intro: "You can always change your preferences by:<br/><br/>- Enter the amount you want to invest.<br/>-  Choose expected rate of return.<br/>-  Choose tenure.<br/>-  Hit the arrow button, your portfolio will be auto generated."
      },
      {
        element: '#step2',
        intro: 'Based on your preferences,<br/>MY POOL dynamically gets gerenrated.<br/><br/><b>My pool info: </b><br/>-  Total value  of the pool.<br/>- Risk category of the pool.<br/>-  List of borrowers in the pool.<br/>-  You can remove, add borrowers in the pool.<br/>- Drag to remove the borrower out of the pool.<br/>- Invest button to fulfill loan.',
        position: 'left'
      },
      {
        element: '#step3',
        intro: "All Borrower listing:<br/><br/>- Click on individual row header to sort the column.<br/>- You can single, multiselect borrower using check box control.<br/>- You can do direct investment by choosing the borrower click 'INVEST NOW' button.<br/>- You can also Add borrowers to pool, by hitting 'ADD TO POOL' button.",
        position: 'right'
      }
    ]
  });

  intro.start();
}

