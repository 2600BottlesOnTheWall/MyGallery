<div class="gallery">

        <div class="photo-thumb-gallery">
            <div class="lSSlideOuter">
                <ul id="imageGallery" class="autoblog-gallery" >
                    <?php foreach($images as $image): ?>
                        <li data-thumb="<?php echo $image->thumbnail[0]; ?>"  data-src="<?php echo $image->large[0]; ?>" >
                        <a href="<?php echo $image->large[0]; ?>" title="image1">
                            <img src="<?php echo $image->thumbnail[0]; ?>" height="<?php echo $image->large[2]; ?>" width="<?php echo $image->large[1]; ?>">
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div> <!--  photo-thumb-gallery -->
        </div> <!--  gallery-tittle -->
    </div> <!--  gallery -->
    

</body>
