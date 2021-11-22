$( document ).ready(function() {
 

    $( "#user-image-manage ul li a  , #user-image-manage ul li i"  ).click(function() {
        let userImg = $(this).find("img").attr("src");
        let userName = $(this ).find("p").text();

        $(".banner .user-info").css("display","none");
        $(".banner .info-manage").remove();
        $(".banner").append(' <div class="col-5 col-s-11 info-manage style="display:"none"; ""><div class="info-navbar"><h1>Profili Düzenle</h1></div><div class="info-banner row"><div class="col-3"><img src=' + userImg + '  alt=""></div><div class="col-9"><ul><li><div><input id="input" class="'+userName+'" value="'+userName+'" type="text"></div><div><p>Dil:</p><select name="language" id="language"><option value="Türkçe">Türkçe</option><option value="İngilizce">İngilizce</option><option value="Almanca">Almanca</option><option value="Arapça">Arapça</option></select></div></li><li><h5>Yetişkinlik Ayarları:</h5><span class="button-p">Tüm Yetişkinlik Düzeyleri</span><p>Bu profilde <b>tüm yetişkinlik düzeylerindeki</b> içerikleri göster.</p><a href="#">Düzenle</a></li><li><h5>Otomatik oynatma kontrolleri</h5><div><label for="manage-select-1">Dizi izlerken sonraki bölümü tüm cihazlarda otomatik olarak oynat.<input checked type="checkbox" id="manage-select-1" name="manage-select-1" value="manage-select-1"><span class="dot"><i class="fas fa-check"></i></span></label></div><div><label for="manage-select-2">İçeriklere göz atarken önizlemeleri tüm cihazlarda otomatik olarak oynat.<input checked type="checkbox" id="manage-select-2" name="manage-select-2" value="manage-select-2"><span class="dot"><i class="fas fa-check"></i></span></label></div></li></ul></div></div><div class="info-footer"><div><button type="button" id="saveBtn">Kaydet</button></div><div><button type="button" id="cancelBtn">İptal</button></div><div><button type="button" id="deleteButton">Profili Sil</button></div></div></div>  </header><script src="https://code.jquery.com/jquery-3.6.0.js"></script><script src="assets/js/manageProfile.js"></script><script src="assets/js/manageProfile2.js"></script>')
    });
    
});
