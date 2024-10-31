$('.nav-links li a').bind('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    //escondendo todos os subitens e setando a cor do item selecionado de forma fixa, ajustar isso melhor depois
    $('.nav-links li .sub-links').hide();
    $('.nav-links .dropdown').css({'background-color': 'var(--background-color-secondary)'});
    //garantindo que somente um indicador fique virado
    $('.nav-links .dropdown .sidebar-nav-indicator').each(function() {
        if ($(this).hasClass('down')) {
            $(this).addClass('left'); 
        }
    });
    //validação classe para poder abrir e fechar o mesmo icone
    if($(this).hasClass('selected')){
        $(this).removeClass('selected');
        return;
    }

    $(this).addClass('selected');
    //timer para poder realiar todas as transições
    setTimeout(() => {
        $('.nav-links .dropdown .sidebar-nav-indicator').removeClass('down left');
        $('.nav-links li a').not($(this)).removeClass('selected');
        $(this).closest('.dropdown').find('.sidebar-nav-indicator').addClass('down');
        
        $(this).next('.sub-links').css('opacity', 0).show().animate({ opacity: 1 }, 100);
        $(this).next('.sub-links').find('a').addClass('show');
        
        $(this).closest('.dropdown').css({'background-color': 'var(--background-color-quaternary)'});
    }, 300); 
});

//limpando a sidebar toda ver que o mouse entrar em content
$('.content').bind('mouseenter', function() {
    $('.nav-links li .sub-links').hide();

    $('.nav-links .dropdown .sidebar-nav-indicator').each(function() {
        if ($(this).hasClass('down')) {
            $(this).addClass('left'); 
        }
    });

    setTimeout(() => {
        $('.nav-links .dropdown .sidebar-nav-indicator').removeClass('down left selected');
    }, 300);
});

//mudar cor do icone no hover
$('.dropdown').parent().bind('mouseenter', function() {
    const tertiaryColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color-tertiary').trim();
    $(this).find('.sidebar-nav-icon').css({'color': tertiaryColor});
});

$('.dropdown').parent().bind('mouseleave', function() {
    const originalColor = ''; 
    $(this).find('.sidebar-nav-icon').css({'color': originalColor});
});