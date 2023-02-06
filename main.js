"use strict"

$(document).ready(function() {
    
    var $self = $(this);
    var $leftPage = $self.find(".left-page-content");
    var $rightPage = $self.find(".right-page-content");

    var $menu = $leftPage.find(".section-menu");
    var $menuItem = $menu.find("div");

    var $menuHome = $menu.find("div.menu-home");
    var $menuWorks = $menu.find("div.menu-works");
    var $menuTechnologies = $menu.find("div.menu-technologies");
    var $menuContact = $menu.find("div.menu-contact");

    var $sectionInfo = $rightPage.find("div.section-info").clone().removeClass("d-none").addClass("hide");
    var $sectionTechnologies = $rightPage.find("div.section-technologies").clone().removeClass("d-none").addClass("hide");
    var $sectionContact = $rightPage.find("div.section-contact").clone().removeClass("d-none").addClass("hide");
    var $sectionWorks = $rightPage.find("div.section-works").clone().removeClass("d-none").addClass("hide");

    //Ao clicar em um menu, alterna as seções apresentadas
    $menuItem.on("click", function() {

        $menuItem.removeClass("active");
        $(this).addClass("active");

        updateMenuVisibility();
    });

    function updateMenuVisibility() {

        $rightPage.empty();

        var $currentSectionClone = null;

        if ($menuHome.hasClass("active")) {

            $currentSectionClone = $sectionInfo.clone();

        } else if ($menuWorks.hasClass("active")) {

            $currentSectionClone = $sectionWorks.clone();

        } else if ($menuTechnologies.hasClass("active")) {
            
            $currentSectionClone = $sectionTechnologies.clone();

        } else if ($menuContact.hasClass("active")) {
            
            $currentSectionClone = $sectionContact.clone();

        }

        if ($currentSectionClone) {
            
            $rightPage.append($currentSectionClone);

            setTimeout(() => {
                $currentSectionClone.removeClass("hide");
            }, 0);

        }

    }

});